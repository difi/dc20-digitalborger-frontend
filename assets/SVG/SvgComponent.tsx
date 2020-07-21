import * as React from "react"
import Svg, { Circle, Path, Ellipse } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Svg
            width={226.9}
            height={601.9}
            viewBox="0 0 226.9 601.9"
            overflow="visible"
            {...props}
        >
            <Circle className="prefix__st0" cx={138.8} cy={85.3} r={36.8} />
            <Path
                className="prefix__st1"
                d="M178.5 546.4l7 30h-17l-7-34zM96.5 546.4v28l-17 2v-30zM183.5 228.4s-2 43-4 46-20 46-20 46l-9-28s14-23 12-36-.7-29-.7-29l21.7 1z"
            />
            <Circle className="prefix__st1" cx={126.5} cy={96.4} r={28} />
            <Path
                className="prefix__st1"
                d="M149.5 99.4s-1 40 6 46-40 1-40 1 10-28 2-34 32-13 32-13z"
            />
            <Path
                className="prefix__st0"
                d="M112.5 144.4s6-11 14-10 34 3 35 5 4 9 6 11 17 5 18 17-36 85-36 85 5 17 4 21 5 16 4 21 15 35 7 74v63s27 109 19 117-35 3-40 0-26-154-26-154l-10-51-1 112s2 94-5 97-34 4-36-2c-1.6-4.7-9.2-129.2-12.5-183.8-1.1-18.8.3-37.7 4.4-56.2 4.2-18.9 10.2-41.1 17.1-50.1 13-17 21-71 21-71l-17-31s10-10 16-10 18-3.9 18-3.9z"
            />
            <Path
                className="prefix__st0"
                d="M179.5 160.4l5.3 3.6s3.7 64.4.7 68.4-23.9 2-25.4-1.5 19.4-70.5 19.4-70.5z"
            />
            <Path
                className="prefix__st1"
                d="M90.3 219c2.9 20.3 5.5 38.4-9.5 54.7-15 16.6-32 31.2-50.5 43.8-1.8 4.9-28.8 40.6-30.2 26.3s7.9-25.4 21.2-37.5 31.7-38.2 42.2-52.5 6.1-23.3 5.8-35.3 16.9.6 21 .5z"
            />
            <Path
                className="prefix__st0"
                d="M79.5 558.2s-1 11.2-4 14.2-11 7-10 18 7.5 11.5 7.5 11.5l-.5-2.5 3 1 .5 1.5h28s.5-10.5-.5-15.5-1-29-4-28-11 2-13 6-8 2.6-7-6.2zM181.5 558.2s1 11.2 4 14.2 11 7 10 18-7.5 11.5-7.5 11.5l.5-2.5-3 1-.5 1.5h-28s-.5-10.5.5-15.5 1-29 4-28 11 2 13 6 8 2.6 7-6.2zM92.5 155.4l-14 3s0 22-4 31-11 30-8 31 31 15 33 7 7-72-7-72z"
            />
            <Circle className="prefix__st0" cx={178.6} cy={36.8} r={36.8} />
            <Path
                className="prefix__st0"
                d="M210.4 67.3c-16.5 11.9-39.5 8.2-51.4-8.3-2.4-3.4-4.3-7.1-5.4-11.1 2.5 20.2 20.9 34.5 41.1 31.9 20.2-2.5 34.5-20.9 31.9-41.1-.3-2-.7-4-1.2-5.9 1.6 13.4-4.1 26.6-15 34.5z"
            />
            <Circle className="prefix__st0" cx={148.6} cy={91.4} r={27} />
            <Ellipse
                className="prefix__st0"
                cx={125.9}
                cy={81.3}
                rx={23.9}
                ry={18.7}
            />
            <Ellipse cx={119.5} cy={100.4} rx={4.5} ry={8} fill="#a0616a" />
        </Svg>
    )
}

export default SvgComponent
