function solution(new_id) {
    const lv1 = lv1_job(new_id);
    const lv2 = lv2_job(lv1);
    const lv3 = lv3_job(lv2);
    const lv4 = lv4_job(lv3);
    const lv5 = lv5_job(lv4);
    const lv6 = lv6_job(lv5);
    const lv7 = lv7_job(lv6)
    return lv4_job(lv7)
}

function lv1_job(new_id) {
    return new_id.toLowerCase();
}

function lv2_job(new_id) {
    return new_id.replace(/[^\w._-]/g, '');
}

function lv3_job(new_id) {
    return new_id.split(/[.]{2,}/g).join('.');
}

function lv4_job(new_id) {
    let id = new_id;
    if (new_id.startsWith('.')) {
        id = new_id.slice(1, new_id.length);
    }
    if (new_id.endsWith('.')) {
        id = id.slice(0, -1);
    }
    return id;
}

function lv5_job(new_id) {
    return new_id === '' ? 'a' : new_id;
}

function lv6_job(new_id) {
    return new_id.length > 15 ? new_id.slice(0, 15): new_id;
}

function lv7_job(new_id) {
    return new_id.length <= 2
        ? new_id + new_id[new_id.length - 1].repeat(3 - new_id.length)
        : new_id;
}