(function (e) {
  const n = (e['af'] = e['af'] || {});
  n.dictionary = Object.assign(n.dictionary || {}, {
    '%0 of %1': '%0 van %1',
    'Align center': 'Belyn in die middel',
    'Align left': 'Belyn links',
    'Align right': 'Belyn regs',
    'Block quote': 'Verwysingsaanhaling',
    Bold: 'Vet',
    Cancel: 'Kanselleer',
    'Cannot upload file:': 'Lêer nie opgelaai nie:',
    Code: 'Bronkode',
    Italic: 'Kursief',
    Justify: 'Belyn beide kante',
    'Remove color': 'Verwyder kleur',
    'Restore default': 'Herstel verstek',
    'Rich Text Editor. Editing area: %0': '',
    Save: 'Stoor',
    'Show more items': 'Wys meer items',
    Strikethrough: 'Deurstreep',
    Subscript: 'Onderskrif',
    Superscript: 'Boskrif',
    'Text alignment': 'Teksbelyning',
    'Text alignment toolbar': 'Teksbelyning nutsbank',
    Underline: 'Onderstreep',
  });
  n.getPluralForm = function (e) {
    return e != 1;
  };
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
