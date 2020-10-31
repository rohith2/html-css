const converstion = (inp, out = []) =>
  inp.reduce((accum, val) => {
    const { childrens, ...rest } = val;
    if (childrens.length) return converstion(childrens, accum.concat([rest]));
    return accum.concat([rest]);
  }, out);

