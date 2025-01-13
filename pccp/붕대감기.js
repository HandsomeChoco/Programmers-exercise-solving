/**
 * @param {number[]} bandage 붕대감기 기술 [시전 시간 t, 초당 회복량 x, 추가 회복량 y]
 * @param {number} health 최대 체력
 * @param {number[][]} attacks 몬스터의 공격들
 */
function solution(bandage, health, attacks) {
  const [cast, heal_tick, bonus_heal] = bandage;
  const max_health = health; // 최대 체력
  const play_time = attacks[attacks.length - 1][0]; // 붕대 감기 시도 횟수 = 마지막 몬스터 공격 시간

  // 마지막으로 참조한 공격의 인덱스
  let last_attack_index = 0;
  // 남은 체력
  let result = health;
  // 회복 스택
  let stack = 0;

  // 매초 체력 계산
  for (let i = 0; i <= play_time; i++) {
    const attack_time = attacks[last_attack_index][0];
    const attack_damage = attacks[last_attack_index][1];

    // 몬스터에게 맞게 되면 회복을 수행하지 않음
    let skip = false;

    // 몬스터의 공격시간과 현재 시간이 일치할 때 체력 감소 로직 실행
    if (i === attack_time) {
      result -= attack_damage;
      last_attack_index += 1;

      // 회복 스택 초기화 및 회복 수행 방지
      stack = 0;
      skip = true;
    }

    // 체력이 1보다 낮은 경우는 사망, -1 반환
    if (result <= 0) {
      result = -1;
      break;
    }

    // 몬스터에게 맞게 되면 회복을 수행하지 않음
    if (skip) {
      continue;
    }

    // 회복 시도
    result += heal_tick;
    stack += 1;

    // 추가 회복
    if (stack === cast) {
      result += bonus_heal;
      stack = 0;
    }

    // 최대 체력 이상 회복 불가
    if (result > max_health) {
      result = max_health;
    }
  }

  return result;
}
