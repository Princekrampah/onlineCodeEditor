let editor = document.getElementById("editor");

ace.edit(editor, {
  theme: "ace/theme/cobalt",
  mode: "ace/mode/python",
  selectionStyle: "text",
});

editor.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
});
