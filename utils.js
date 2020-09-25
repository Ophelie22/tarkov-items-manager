const PreventDefault = (func, evt) => {
  evt.PreventDefault();
  return func;
};

export default PreventDefault;
