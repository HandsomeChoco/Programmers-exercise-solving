function solution(video_len, pos, op_start, op_end, commands) {
  const pos_second = toSeconds(pos);
  const op_start_second = toSeconds(op_start);
  const op_end_second = toSeconds(op_end);
  const video_len_second = toSeconds(video_len);

  const adjust_position_params = {
    op_start_second,
    op_end_second,
    video_len_second,
  };

  const init_pos_second = adjustPosition({
    pos: pos_second,
    ...adjust_position_params,
  });

  const result = commands.reduce((acc, cmd) => {
    let now = adjustPosition({
      pos: acc,
      ...adjust_position_params,
    });

    const is_prev = cmd === "prev";

    acc = adjustPosition({
      pos: is_prev ? now - 10 : now + 10,
      ...adjust_position_params,
    });

    return acc;
  }, init_pos_second);

  return toMMSS(result);
}

function toSeconds(time) {
  // 시간으로 변환
  const [min, second] = time.split(":").map((t) => Number(t));

  return min * 60 + second;
}

function toMMSS(result) {
  let mm = Math.floor(result / 60);
  let ss = Math.floor(result % 60);

  if (mm < 10) {
    mm = `0${mm}`;
  }

  if (ss < 10) {
    ss = `0${ss}`;
  }
  return `${mm}:${ss}`;
}

// 영상 위치. 종료 or 시작지점 범위 보정
function adjustPosition({
  pos,
  op_start_second,
  op_end_second,
  video_len_second,
}) {
  // 영상 시작
  if (pos < 0) {
    return 0;
  }

  if (pos >= op_start_second && pos <= op_end_second) {
    return op_end_second;
  }
  if (pos >= video_len_second) {
    return video_len_second;
  }

  return pos;
}
