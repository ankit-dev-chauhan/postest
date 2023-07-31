import React, { useId } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor';

const AnimatedText = (props) => {

    const { start = 0, end = 200, duration = 1000, className } = props;
    const someId = useId();

    const counter = (id, start, end, duration) => {
        let obj = window.document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    const onChange = () => {
        counter(someId, start, end, duration);
    }

    return (
        <ReactVisibilitySensor onChange={onChange}>
            <span className={className} id={someId}></span>
        </ReactVisibilitySensor>
    )
}

export default AnimatedText