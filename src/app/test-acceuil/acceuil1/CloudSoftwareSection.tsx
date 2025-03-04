"use client";

import { motion } from "framer-motion";
import { FaFileInvoice, FaCalendarAlt, FaUsers } from "react-icons/fa";

const features = [
    {
        icon: <FaFileInvoice className="text-white text-3xl" />,
        title: "Online Billing, Invoicing, & Contracts",
        description: "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
        bgColor: "bg-indigo-500",
    },
    {
        icon: <FaCalendarAlt className="text-white text-3xl" />,
        title: "Easy Scheduling & Attendance Tracking",
        description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
        bgColor: "bg-teal-500",
    },
    {
        icon: <FaUsers className="text-white text-3xl" />,
        title: "Customer Tracking",
        description: "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization",
        bgColor: "bg-blue-500",
    },
];

export default function CloudSoftwareSection() {
    return (
        <section className="bg-gray-50 py-16 px-4 text-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900"
            >
                All-In-One <span className="text-teal-500">Cloud Software.</span>
            </motion.h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
                    >
                        <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${feature.bgColor} shadow-lg`}>
                            {feature.icon}
                        </div>
                        <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
