import React from "react";
import Downloads from "../Downloads";
import styled from "styled-components";
import {
  RalewayBoldWhite100px,
  RalewayBoldWhite54px,
  RalewayBoldWhite36px,
  RalewayBoldWhite22px,
  ValignTextMiddle,
} from "../../styledMixins";


function Products(props) {
  const { className, downloadsProps } = props;

  return (
    <Products1 className={`products ${className || ""}`}>
      <ProductManagement className="product-management">
        <FlexRow className="flex-row-18">
          <Kanban className="kanban" src="/img/kanban-9@2x.png" alt="Kanban" />
          <ProductManagement1 className="product-management-1">
            <span className="span5lp23 raleway-bold-white-100px">Product Management</span>
          </ProductManagement1>
        </FlexRow>
        <LoremIpsumDolorSi className="lorem-ipsum-dolor-si-3">
          <span>
            <span className="spanfj16l raleway-bold-white-22px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dapibus at feugiat ante mollis faucibus
              tellus ante. Tristique habitant turpis ut turpis ut. Aliquet scelerisque vitae, mattis purus est. Sapien,
              vitae, euismod vel eleifend id. Felis suspendisse mattis aliquet praesent dolor augue. Nunc, in ornare
              arcu in etiam tristique cum felis. Dignissim vestibulum tincidunt facilisi egestas amet enim aenean.
              Posuere risus sapien, sit pulvinar habitant.
            </span>
          </span>
        </LoremIpsumDolorSi>
        <LearnMore className="learn-more">
          <span>
            <span className="spandfaff raleway-bold-white-22px">Learn More</span>
          </span>
        </LearnMore>
      </ProductManagement>
      <Downloads1 className="downloads">
        <PlatformsAvailableForDownload className="platforms-available-for-download">
          <span className="spannizoog raleway-bold-white-54px">Platforms Available for Download</span>
        </PlatformsAvailableForDownload>
        <Downloads className={downloadsProps.className} />
        <CarApplication className="car-application">
          <CarTopView className="car-top-view" src="/img/car-top-view-9@2x.png" alt="Car Top View" />
          <SoonToBeCarApplication className="soon-to-be-car-application">
            <span>
              <span className="spanjo1og raleway-bold-white-36px">Soon to be car application...</span>
            </span>
          </SoonToBeCarApplication>
        </CarApplication>
      </Downloads1>
    </Products1>
  );
}

const Products1 = styled.div`
  width: 1512px;
  height: 982px;
  display: flex;
  flex-direction: column;
  padding: 35px 59px;
  align-items: flex-end;
  gap: 99px;
  background-color: var(--purple-heart);
  border: 1px none;

  &.products.products-1 {
    background-color: var(--orchid);
  }

  &.products.products-2 {
    background-color: var(--portage);
  }

  &.products.products-3 {
    background-color: var(--fern);
  }

  &.products.products-4 {
    background-color: #00000033;
  }

  &.products.products-5 {
    background-color: var(--peach-yellow);
  }

  &.products.products-6 {
    background-color: var(--anzac);
  }

  &.products.products-7 {
    background-color: var(--mandy);
  }

  &.products.products-8 {
    height: 1000px;
    padding: 53px 59px;
    background-color: var(--mexican-red);
  }

  &.products.products-9 {
    background-color: var(--yellow-sunshine);
  }

  &.products.products-10 {
    background-color: var(--turquoise-blue);
  }

  &.products.products-11 {
    background-color: var(--seagull);
  }
`;

const ProductManagement = styled.div`
  ${RalewayBoldWhite22px}
  width: 1346px;
  align-self: center;
  margin-top: 33px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  align-items: center;
  min-height: 336px;
`;

const FlexRow = styled.div`
  height: 109px;
  margin-top: -1px;
  margin-right: 17px;
  display: flex;
  align-items: center;
  min-width: 1183px;
  gap: 45px;
`;

const Kanban = styled.img`
  width: 96px;
  height: 89px;
  margin-top: 1.07px;
`;

const ProductManagement1 = styled.div`
  ${RalewayBoldWhite100px}
  width: 1042px;
  min-height: 109px;
  letter-spacing: 0;
`;

const LoremIpsumDolorSi = styled.div`
  ${ValignTextMiddle}
  width: 1340px;
  height: 97px;
  margin-top: 47px;
  margin-right: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const LearnMore = styled.div`
  ${ValignTextMiddle}
  width: 120px;
  height: 24px;
  margin-top: 59px;
  margin-right: 6px;
  text-align: center;
  letter-spacing: 0;
`;

const Downloads1 = styled.div`
  width: 1392px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 444px;
`;

const PlatformsAvailableForDownload = styled.div`
  ${RalewayBoldWhite54px}
  width: 866px;
  margin-top: -1px;
  min-height: 69px;
  align-self: center;
  margin-right: 2px;
  letter-spacing: 0;
`;

const CarApplication = styled.div`
  margin-top: 112px;
  margin-left: 50px;
  display: flex;
  align-items: center;
  min-width: 1051px;
  gap: 74px;
`;

const CarTopView = styled.img`
  width: 96px;
  height: 105px;
`;

const SoonToBeCarApplication = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            width: 879px;
  height: 46px;
  margin-bottom: 2px;
  letter-spacing: 0;
`;

const ProductManagement2 = styled.div`
  ${RalewayBoldWhite22px}

  .products.products-8  & {
    margin-top: 15px;
  }
`;

const CarApplication1 = styled.div`
  .products.products-9 & {
    align-items: flex-start;
  }
`;

const CarTopView1 = styled.img`
  .products.products-9 & {
    margin-top: 0;
  }
`;

const SoonToBeCarApplication1 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            
            
           .products.products-9  & {
    align-self: center;
  }
`;

const CarApplication2 = styled.div`
  .products.products-10 & {
    align-items: flex-start;
  }
`;

const CarTopView2 = styled.img`
  .products.products-10 & {
    margin-top: 0;
  }
`;

const SoonToBeCarApplication2 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            
            
           .products.products-10  & {
    align-self: center;
  }
`;

const CarApplication3 = styled.div`
  .products.products-11 & {
    align-items: flex-start;
  }
`;

const CarTopView3 = styled.img`
  .products.products-11 & {
    margin-top: 0;
  }
`;

const SoonToBeCarApplication3 = styled.div`
  ${ValignTextMiddle}
  ${RalewayBoldWhite36px}
            
            
           .products.products-11  & {
    align-self: center;
  }
`;

export default Products;
