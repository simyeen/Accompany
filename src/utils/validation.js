export const validation = state => {
  try {
    if (!state) {
      throw new Error('state가 현재 정의되지 않았습니다.');
    }
  } catch (e) {
    alert(e.message);
  }
};
