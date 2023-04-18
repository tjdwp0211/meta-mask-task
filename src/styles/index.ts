import * as airbnb from "./fonts/airbnbCerealW";
import * as urbanist from "./fonts/urbanist";
import * as gilroy from "./fonts/gilroy";
import PALETTE from "./palette";

const GILROY = { bold: gilroy.bold.style.fontFamily };

const AIRBNBCEREAL_W = {
  medium: airbnb.medium.style.fontFamily,
  bold: airbnb.bold.style.fontFamily,
};

const URBANIST = {
  medium: urbanist.medium.style.fontFamily,
  semiBold: urbanist.semiBold.style.fontFamily,
  bold: urbanist.bold.style.fontFamily,
};

export { AIRBNBCEREAL_W, GILROY, URBANIST, PALETTE };

/**
 * 아래와 같이 위 코드의 반복된 작업을 최소화 시켜 봤으나 gilroyFont, airbnbCerealWFont, urbanistFont에
 * key가 무엇이 있는지 인식하지 못 해서 개발 생산성이 낮다 판단하였습니다.
 * 그리고 개인적으로 위 코드가 좀 더 직관적이라고 생각해 위 코드를 사용하였습니다.
 * 
 * const createFont = (font: { [fontType: string]: NextFont }) => {
    type fontKinds = keyof typeof font;
    let fontBasket: { [key: fontKinds]: string } = {};

    Object.keys(font).forEach(key => {
      fontBasket = { ...fontBasket, [key]: font[key].style.fontFamily };
    });

    return fontBasket;
  };

  const airbnbCerealWFont = createFont(airbnb);
  const urbanistFont = createFont(urbanist);
  const gilroyFont = createFont(gilroy);
 */
