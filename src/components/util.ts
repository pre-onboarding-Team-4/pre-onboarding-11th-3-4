const getFormatPassedDate = (date: string) => {
  const startDate = new Date(date);
  const currentDate = new Date();
  const elapsedMilliseconds = currentDate.getTime() - startDate.getTime();

  console.log(date, startDate);

  // 분 단위 계산
  const minutes = Math.floor(elapsedMilliseconds / (1000 * 60));
  if (minutes < 60) {
    return `${minutes}minutes ago`;
  }

  // 시간 단위 계산
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}hours ago`;
  }
  // 일 단위 계산
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return `${days}days ago`;
  }

  // 주 단위 계산
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return `${weeks}weeks ago`;
  }

  // 월 단위 계산
  const months = Math.floor(days / 30);
  if (months < 12) {
    return `${months}months ago`;
  }

  // 년 단위 계산
  const years = Math.floor(months / 12);
  return `${years}years ago`;
};

export { getFormatPassedDate };
