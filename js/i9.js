// Documents
var lists = {
  a: document.getElementById('document-list-a'),
  b: document.getElementById('document-list-b'),
  c: document.getElementById('document-list-c')
};

var itemProto = document.getElementById('document-item-template');
var itemTemplate = itemProto.cloneNode(true);
itemTemplate.id = '';

var addA = document.getElementById('document-add-a');
var addB = document.getElementById('document-add-b');
var addC = document.getElementById('document-add-c');

var docIs = {
  a: 0,
  b: 0,
  c: 0
};

function createDoc(listName) {
  var docI = docIs[listName]++;
  var item = itemTemplate.cloneNode(true);
  var inputs = item.getElementsByTagName('input');
  var labels = item.getElementsByTagName('label');
  for (var i = 0; i < inputs.length; i++) {
    var id = inputs[i].id
      .replace('-a[0]', '-' + listName + '[' + docI + ']');
    inputs[i].setAttribute('id', id);
    labels[i].setAttribute('for', id);
  }
  return item;
}

function addDoc(listName) {
  var list = lists[listName];
  var btns = list.getElementsByTagName('button');
  var btn = btns[btns.length-1];
  if (!btn) return;

  var item = createDoc(listName);
  list.insertBefore(item, btn);
}

function addBtn(btn, listName) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    addDoc(listName);
  }, false);
}

addBtn(addA, 'a');
addBtn(addB, 'b');
addBtn(addC, 'c');
