import 'react-native';
import { normalizeFontSize } from '../src/modules/utilities/sizeCal';
import colors from '../src/modules/values/colors';
import fontMaker from '../src/modules/utilities/fontMaker';

describe("fontMaker function", () => {
  test("it should return style object", () => {

    const output = {
      fontSize: normalizeFontSize(20),
      fontWeight: "600",
      color: "#fff"
    };

    expect(fontMaker(20, "600", colors.white)).toEqual(output);

  });
});