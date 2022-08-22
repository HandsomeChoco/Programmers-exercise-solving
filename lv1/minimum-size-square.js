function solution(sizes) {
    let smaller = [];
    let bigger = [];

    for (let i=0; i<sizes.length; i++) {
        const [w, h] = sizes[i];
        if (w > h) {
            bigger.push(w);
            smaller.push(h);
        } else {
            smaller.push(w);
            bigger.push(h);
        }
    }

    return (Math.max(...smaller) * Math.max(...bigger));
}