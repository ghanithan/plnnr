export function fadeScale( node, {
    delay =0, duration = 200, easing = x => x, baseScale =0
}){
    const opacity = +getComputedStyle(node).opacity;
    const m = getComputedStyle(node).transform.match(/scale\(([0-9.]+)\)/);
    const s = m ? m[1] : 1;
    const is = 1 - baseScale;

    return {
        delay,
        duration,
        css: t => {
            const eased = easing(t);
            console.log(eased);
            return `opacity: ${eased * opacity};
                    transform: scale(${(eased * s * is) + baseScale})`;

        }
    };
    
}