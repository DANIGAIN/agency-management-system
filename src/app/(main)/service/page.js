'use client'
import Link from 'next/link';
import Image from 'next/image'
import { GlobalContext } from '@/context';
import React, { useContext } from 'react'
export default function Service() {
    const { discount } = useContext(GlobalContext)
    const { services ,showServices} = useContext(GlobalContext)
    return (
        <div className='dark:bg-slate-900 pt-10'>
            <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 mt-14">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                                Our Services
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Our services include creating standards of excellence, training your people to work effectively, business consulting, market research, and growth strategies
                            </p>
                        </div>

                    </div>
                    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            services.loading ?
                                Array.from({ length: 4 }).map((_, index) => (

                                    <div key={index} className="rounded-lg border border-gray-200 dark:bg-slate-600 p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                        <div className="h-45 w-full">
                                            <div className="flex animate-pulse items-center justify-center h-50 w-65 bg-slate-300 rounded  dark:bg-gray-700">
                                                <svg className="w-10 h-10 text-gray-2 dark:text-graydark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-full mt-15">
                                            <div className="h-3 rounded-full bg-slate-300  w-48 mb-4"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-w-[480px] mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-30 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-35 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-40 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-48 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-48 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-48 mb-2.5"></div>
                                            <div className="h-3 rounded-full bg-slate-300 max-w-[360px]"></div>
                                        </div>
                                    </div>
                                ))
                                :
                                showServices.map((data, index) => (
                                    <div key={index} className="ransition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg border border-gray-200 bg-slate-200 dark:bg-slate-600 p-6 ">
                                        <div className="h-45 w-full">
                                            <Image
                                                className="mx-auto  h-full dark:block hover:border-2 border-yellow-50 dark:border-graydark"
                                                src={"/category/" + data.category?.image}
                                                alt=""
                                                height={220}
                                                width={220}
                                            />

                                        </div>
                                        <div className="pt-6">
                                            <div className="mb-4 flex items-center justify-between gap-4">
                                                <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                                    You get {discount.amount} % off{" "}
                                                </span>
                                                <div className="flex items-center justify-end gap-1">
                                                    <Link
                                                        href={`/service/${data._id}?d=${discount.amount}`}
                                                        data-tooltip-target="tooltip-quick-look"
                                                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                    >
                                                        <span className="sr-only"> Quick look </span>
                                                        <svg
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={24}
                                                            height={24}
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                                                            />
                                                            <path
                                                                stroke="currentColor"
                                                                strokeWidth={2}
                                                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                            />
                                                        </svg>
                                                    </Link>
                                                    <div
                                                        id="tooltip-quick-look"
                                                        role="tooltip"
                                                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                                        data-popper-placement="top"
                                                    >
                                                        Quick look
                                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        data-tooltip-target="tooltip-add-to-favorites"
                                                        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                                    >
                                                        <span className="sr-only"> Add to Favorites </span>
                                                        <svg
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <div
                                                        id="tooltip-add-to-favorites"
                                                        role="tooltip"
                                                        className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                                                        data-popper-placement="top"
                                                    >
                                                        Add to favorites
                                                        <div className="tooltip-arrow" data-popper-arrow="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/service/${data._id}?d=${discount.amount}`}
                                                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                                            >
                                                {data?.category?.name}
                                            </Link>
                                            <p>
                                                {data?.category?.description.substring(0, 50) + '...'}

                                            </p>
                                            {data?.reviews.length ? <div className="mt-2 flex items-center gap-2">
                                                <div className="flex items-center">
                                                    {
                                                        Array.from({
                                                            length: parseInt((
                                                                data.reviews.reduce((acc, current) => acc + current.rating, 0) /
                                                                data.reviews.length
                                                            ).toFixed(1))
                                                        }, (_, i) => (
                                                            <svg
                                                                key={i}
                                                                className="h-4 w-4 text-yellow-300"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={24}
                                                                height={24}
                                                                fill="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                                                            </svg>
                                                        ))
                                                    }
                                                </div>
                                                <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {
                                                        (data?.reviews.reduce((acc, current) => acc + current.rating, 0) /
                                                            data.reviews.length
                                                        ).toFixed(1)}
                                                </p>
                                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                    ({data?.reviews.length})
                                                </p>
                                            </div> : null}
                                            <ul className="mt-2 flex items-center gap-4">
                                                <li className="flex items-center gap-2">
                                                    <svg
                                                        className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                                                        />
                                                    </svg>
                                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                                        {data?.type}
                                                    </p>
                                                </li>

                                            </ul>
                                            <div className="mt-4">
                                                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                                                    {parseInt(data.price - (discount.amount * data.price / 100)) + "-" + parseInt((data.price + 50) - (discount.amount * data.price / 100))} USD
                                                </p>
                                                <p className="text-sm  leading-tight text-gray-900 dark:text-white line-through">
                                                    {parseInt(data.price) + "-" + (data.price + 50)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>

                </div>
            </section>

        </div>

    )
}