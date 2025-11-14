'use client';
import dynamic from "next/dynamic";

const Content = dynamic(() => import("./page-20171119"), { ssr: false });

export default function Page() {
    return <Content />;
}