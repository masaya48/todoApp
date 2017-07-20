export const TEXT_UPDATE = 'TEXT_UPDATE';

export const fetchTextUpdate = text => {
  return{
    type: TEXT_UPDATE,
    text: text,
  }
}