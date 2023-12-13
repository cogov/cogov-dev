import { relement__use } from 'relementjs'
import { server__relement } from 'relementjs/server'
import { build } from './build.js'
import { config__init } from './app/index.js'
config__init()
relement__use(server__relement)
await build()
