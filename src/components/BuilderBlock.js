import React, { useState, useRef, useEffect } from 'react';
import Exclude from '../media/Exclude.png';
import ComponentPicker from './ComponentPicker';
import mapImages from './MapImages';

function BuilderBlock(props) {
  const [visibleModel, setVisibleModel] = useState(null);
  const [showMore, setShowMore] = useState(true);
  const [component, setComponent] = useState('kleur');
  const [selectedOptions, setSelectedOptions] = useState({});

  const [maxHeight, setMaxHeight] = useState("0px");
  const pickerRef = useRef(null);

  useEffect(() => {
    const el = pickerRef.current;
    if (!el) return;

    if (showMore) {
      setMaxHeight("0px");

      requestAnimationFrame(() => {
        const realHeight = el.scrollHeight + "px";
        setMaxHeight(realHeight);

        setTimeout(() => {
          setMaxHeight("auto");
        }, 700);
      });
    } else {
      const current = el.scrollHeight + "px";
      setMaxHeight(current);

      requestAnimationFrame(() => {
        setMaxHeight("0px");
      });
    }
  }, [showMore, component, visibleModel]);

  useEffect(() => {
    if (visibleModel) {
      setComponent('kleur');
      setShowMore(true);
    }
  }, [visibleModel]);

  const handleClick = (event) => {
    const clickedComponent = event.target.id;
    if (component === clickedComponent && showMore) {
      setShowMore(false);
    } else {
      setComponent(clickedComponent);
      setShowMore(true);
    }
  };

  const getModelImage = (model) => {
    return mapImages[`${model}`] || mapImages[`${model}Selecter`] || null;
  };

  const toggleModel = (model) => {
    const sameModel = visibleModel === model;
    if (sameModel) {
      setVisibleModel(null);
      setShowMore(false);
      if (props.onSelectModel) props.onSelectModel(null);
      return;
    }

    setVisibleModel(model);
    setShowMore(true);
    setComponent('kleur');
    if (props.onSelectModel) props.onSelectModel(props.model);
  };

  const renderButton = (id, style) => {
    const isSelected = !!selectedOptions?.[id];
    return (
      <button
        id={id}
        onClick={handleClick}
        className={`absolute rounded-full border transition-all duration-200 ${style} ${
          isSelected ? 'border-green-500 ring-2 ring-green-400' : 'border-neutral-400'
        }`}
      >
        {isSelected && (
          <div className="pointer-events-none absolute inset-0 bg-green-500 bg-opacity-50 flex justify-center items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </button>
    );
  };

  const isExpanded = visibleModel === props.model || visibleModel === `${props.model}Electric`;

  return (
    <article className="border border-neutral-300 w-full 2xl:flex 2xl:items-start 2xl:gap-4 min-h-[341px]">
      <section className="w-full 2xl:max-w-[360px] 2xl:flex-shrink-0 flex flex-col items-center">
        <img
          className={`w-[360px] h-auto ${isExpanded ? '2xl:hidden' : ''}`}
          src={
            getModelImage(visibleModel) ||
            getModelImage(props.model) ||
            mapImages['PLineSelecter']
          }
          alt={props.model}
        />

        <div className="w-full flex flex-col items-center">
          <h2 className="font-roboto text-4xl pt-8">
            <b>{props.model}</b>
          </h2>
          <p className="font-robotoMono text-sm">{props.sentence1}</p>
          <p className="font-robotoMono text-sm">{props.sentence2}</p>
          <h4 className="font-robotoMono text-base mt-2">
            <b>Vanaf €{props.price}</b>
          </h4>

          <div className="flex flex-col items-center mt-4">
            <button
              onClick={() => toggleModel(props.model)}
              className="font-robotoMono text-sm border border-black p-1 m-2 hover:text-white hover:bg-black"
            >
              {visibleModel === props.model ? 'verberg' : 'Ontdek'} {props.model}
            </button>

            {props.hasElectric && (
              <button
                onClick={() => toggleModel(`${props.model}Electric`)}
                className="font-robotoMono text-sm border-b border-black m-2"
              >
                {visibleModel === `${props.model}Electric` ? 'verberg' : 'Ontdek'} {props.model} Electric
              </button>
            )}
          </div>
        </div>
      </section>

      {isExpanded && (
        <div className="w-full mt-4 2xl:mt-0 2xl:flex-1">
          <article className="w-full flex flex-col items-center 2xl:flex-row 2xl:items-start 2xl:gap-4 ">
            <div className="relative w-[360px] aspect-[4/3] 2xl:w-[360px] 2xl:flex-shrink-0">
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src={Exclude}
                alt="overlay"
              />
              <img
                className="w-full h-full object-cover"
                src={getModelImage(visibleModel) || getModelImage(props.model)}
                alt={props.model}
              />

              {renderButton('versnelling', 'w-9 h-9 top-[200px] left-[38px]')}
              {renderButton('rack', 'w-9 h-9 top-[159px] left-[18px]')}
              {renderButton('zadel', 'w-[72px] h-[72px] top-[2px] left-[72px]')}
              {renderButton('kleur', 'w-[53px] h-[53px] top-[134px] left-[128px]')}
              {renderButton('stuur', 'w-[72px] h-[72px] top-[-2px] left-[218px]')}
              {renderButton('verlichting', 'w-9 h-9 top-[137px] left-[278px]')}
              {renderButton('zadelHoogte', 'w-9 h-9 top-[88px] left-[100px]')}
            </div>

            <div
              className="overflow-hidden transition-all duration-700 ease-in-out w-full 2xl:flex-1"
              style={{
                maxHeight: maxHeight,
                opacity: showMore ? 1 : 0,
                marginTop: showMore ? "16px" : "0px"
              }}
            >
              <div ref={pickerRef}>
                <ComponentPicker
                  model={visibleModel}
                  component={component}
                  selectedOptions={selectedOptions}
                  setSelectedOptions={setSelectedOptions}
                />
              </div>
            </div>

          </article>
        </div>
      )}
    </article>
  );
}

export default BuilderBlock;
