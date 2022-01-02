import { Dimensions, PixelRatio } from "react-native";

class Device {
	static pixelRatio = PixelRatio.get();
	static pxHeight = Device.dpHeight * PixelRatio.get();

	static get physicalWidth() {
		return Device.width * Device.pixelRatio;
	}

	static get physicalHeight() {
		return Device.height * Device.pixelRatio;
	}

	static get cssWidth() {
		return Device.width;
	}

	static get cssHeight() {
		return Device.height;
	}

	static get width() {
		return Dimensions.get("window").width;
	}

	static get height() {
		return Dimensions.get("window").height;
	}
}

export default Device;
