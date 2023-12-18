import React, { Fragment } from "react";
import { formatPrice, isNewShoe } from "../../utils";
import { useFilter } from "../../Hooks";

function ShoeCard({ isFilter, isSearch }) {
  const ShoeList = useFilter(isFilter, isSearch);

  if (ShoeList == undefined || !ShoeList.length) {
    return <PageNotFound isSearch={isSearch} />;
  }

  return (
    <>
      {ShoeList.map(
        ({
          slug,
          name,
          imageSrc,
          price,
          salePrice,
          releaseDate,
          numOfColors,
        }) => {
          return (
            <Fragment key={slug}>
              <div className="relative">
                <a href={`/${slug}`}>
                  <div className="overflow-hidden rounded-tl-xl rounded-tr-xl rounded-bl-md rounded-br-md">
                    <img
                      src={imageSrc}
                      alt={name}
                      className="motion-safe:hover:origin-[50%_75%] transition-all will-change-transform duration-[600ms] motion-safe:hover:scale-110 motion-safe:hover:transition-all motion-safe:hover:duration-200  motion-safe:focus:scale-110 motion-safe:focus:transition-all motion-safe:focus:duration-200 "
                    />
                  </div>
                  {isNewShoe(releaseDate) && (
                    <p className="absolute bg-custom-secondary text-white font-bold text-xs top-3 -right-1 px-3 py-2 rounded-sm">
                      {isNewShoe(releaseDate)}
                    </p>
                  )}
                  {salePrice && (
                    <p className="absolute bg-custom-primary text-white font-bold text-xs top-3 -right-1 px-3 py-2 rounded-sm">
                      Sale
                    </p>
                  )}
                  <div className="flex justify-between mt-3 text-custom-gray-900">
                    <p className="font-semibold ">{name}</p>
                    {salePrice ? (
                      <p className="line-through">{formatPrice(price)}</p>
                    ) : (
                      <p>{formatPrice(price)}</p>
                    )}
                  </div>
                  {salePrice && (
                    <p className="absolute right-0 font-semibold text-custom-primary">
                      {formatPrice(salePrice)}
                    </p>
                  )}

                  <p className="text-custom-gray-700">
                    {numOfColors === 1
                      ? `${numOfColors} Color`
                      : `${numOfColors} Colors`}
                  </p>
                </a>
              </div>
            </Fragment>
          );
        }
      )}
    </>
  );
}

export default ShoeCard;

function PageNotFound({ isSearch }) {
  return (
    <div className="absolute w-fitcontent">
      <p className="font-semibold text-2xl text-gray-400">
        {` We could not find anything for "${isSearch}".`}
      </p>
    </div>
  );
}
