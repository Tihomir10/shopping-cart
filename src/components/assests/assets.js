function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export var array = []
var i = 0;

for (var key in images) {
  var name = images[key].default.replace('/static/media/', '')
  name = name.replace('_', ' ')
  name = name.substring(0, name.length - 13).toUpperCase()
  array.push({id: i, link: images[key].default, name, price: Math.floor(Math.random() * 99) + 10 })
  i++
}


