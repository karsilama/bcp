import { ENV_TYPE } from "@bcp/models/env.model";
import { defaults } from "./defaults";

export const environment = {
	...defaults,
	production: true,
	baseUrl: '',
	type: ENV_TYPE.PROD
};
