import React from 'react'
import { useDispatch } from 'react-redux'
import { io } from 'socket.io-client'
let socket = io("http://localhost:9000/", { transports: ['websocket', "polling"] })

export { socket }

export default function Socketfunction() {

    socket.on("connect", () => {
        console.log('Socket.connected : ', socket.connected)
        console.log('Socket id', socket.id)

        socket.on('message', (data) => {
            let { event, payload } = data
            console.log('Response', data)
        })

        // socket.emit("message", { data: {} })
    })
    socket.on("disconnect", () => {
        console.log('Socket disconnect id', socket.id)
    })
}



export function disconnectSocket() {
    socket.disconnect()
}