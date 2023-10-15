import { import_meta_env_, type ImportMetaEnv } from '@ctx-core/env'
export const deploy__env:deploy__env_T = import_meta_env_()
export interface deploy__env_T extends ImportMetaEnv {
	COGOVME_PORT:string
}
