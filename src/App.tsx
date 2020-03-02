import React, { useEffect } from 'react';
import Dropdown from './components/Dropdown';
import Header from './components/Header';
import Footer from './components/Footer';
import { Context } from './context/provider';
import { FetchResponse, OptionWithList, OptionWithUsage } from './types';
import ing from './utilities/fetching';

const App: React.FC = () => {
  const context = React.useContext(Context);
  const { dataUrl } = context || {};

  const onDataUrlUpdate = () => {
    if (dataUrl) {
      (async () => {
        const [ferr, f] = await ing<Response>(fetch(dataUrl));
        if (ferr) {
          // tslint:disable-next-line
          console.log('there was an issue fetching the resource:', { ferr });
          return;
        }

        const [rerr, response] = await ing<FetchResponse>(f.json());
        if (rerr && rerr.name === 'SyntaxError') {
          // tslint:disable-next-line
          console.log(`invalid resource: ${dataUrl}`);
          return;
        }
        if (response.options) {
          context?.resetOptions();
          context?.addOptions(response.options);
        }
      })();
    }
  };
  useEffect(onDataUrlUpdate, [dataUrl]);

  return (
    <section className='h-full flex flex-col'>
      <Header />
      <div className='flex-1 py-2 px-5 flex flex-col md:flex-row'>
        <div className='md:h-full md:w-64'>
          <div className='md:pr-5'>
            <h3>{dataUrl}</h3>
            <div className='text-secondary-500'>I want to:</div>
            {context?.optionGroup.map((og, idx) => {
              return (
                <Dropdown
                  key={`og-${idx}`}
                  className='mb-3'
                  options={[{ label: '--', value: '::0' }, ...og]}
                  onChange={e => {
                    const optionSelected = og.find(
                      _ => _.value === e.target.value
                    );
                    context.sliceOptions(idx);
                    if (
                      optionSelected &&
                      (optionSelected as OptionWithList).options
                    ) {
                      context.addOptions(
                        (optionSelected as OptionWithList).options
                      );
                    }

                    const { usage, note } =
                      (optionSelected as OptionWithUsage) || {};
                    context.addUsageAndNotes(usage, note);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className='md:h-full md:flex-1 md:pl-5 md:border-l'>
          <div className='mb-5'>
            <h3 className='pb-1'>Usage</h3>
            <div className='border-l-8 border-primary-500 rounded-md bg-black text-white p-5'>
              <pre className='whitespace-pre-wrap'>{context?.usage}&nbsp;</pre>
            </div>
          </div>

          <div className='mb-5'>
            <h3 className='pb-1'>Note</h3>
            <div className='border-l-8 border-primary-500 rounded-md bg-black text-white p-5'>
              <pre className='whitespace-pre-wrap'>{context?.note}&nbsp;</pre>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default App;
