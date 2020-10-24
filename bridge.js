const OSC = require('osc-js')

const config = { udpClient: { port: 9876 } }
    // if you want to change port number, change 'port: ****'

const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start a WebSocket server on port 8080