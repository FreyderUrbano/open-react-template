"use client";
import React, { useState } from "react"

const people = [
    {
        id: 1,
        name: 'Wade Cooper',
        avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Arlene Mccoy',
        avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Devon Webb',
        avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Tom Cook',
        avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 5,
        name: 'Tanya Fox',
        avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 6,
        name: 'Hellen Schmidt',
        avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 7,
        name: 'Caroline Schultz',
        avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 8,
        name: 'Mason Heaney',
        avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 9,
        name: 'Claudie Smitham',
        avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 10,
        name: 'Emil Schaefer',
        avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export default function MenuList() {
    const [date, setDate] = useState<string | undefined>("");;
    const [selected, setSelected] = useState(people[3])

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDate(event.target.value);
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <section className="relative pt-30 pb-30 md:pt-10 md:pb-16">
                <label htmlFor="datePicker">Reservar:</label>
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6 md:justify-center">
                    <div className="w-full md:w-1/3">
                        <select className="rounded-lg" value={date} name="select" id="datePicker" onChange={handleDateChange}>
                            <option value="">Elige fecha</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                            <option value="2024-07-09">9 de julio 2024</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3">
                        <select className="rounded-lg" value={date} name="select" id="datePicker" onChange={handleDateChange}>
                            <option value="">Elige Hora Cancha</option>
                            <option value="8 am">8 am</option>
                            <option value="9 am">9 am</option>
                            <option value="10 am">10 am</option>
                            <option value="11 am">11 am</option>
                            <option value="2 pm">2 pm</option>
                            <option value="3 pm">3 pm</option>
                            <option value="4 pm">4 pm</option>
                            <option value="5 pm">5 pm</option>
                            <option value="6 pm">6 pm</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/3">
                        <select className="rounded-lg" value={date} name="select" id="datePicker" onChange={handleDateChange}>
                            <option value="">Elige Cancha Libre</option>
                            <option value="5">Futbol 5</option>
                            <option value="7">Futbol 7</option>
                            <option value="7 y 5">Futbol 7 y 5</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/4">
                        <select className="rounded-lg" value={date} name="select" id="datePicker" onChange={handleDateChange}>
                            <option value="">Elige Forma de pago</option>
                            <option value="nequi">Nequi</option>
                            <option value="daviplata">Daviplata</option>
                            <option value="paypal">Paypal</option>
                        </select>
                    </div>
                </div>

            </section>

        </div>

    )
}
