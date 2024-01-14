const LinkedList = require("./lib/linkedList");
const Node = require("./lib/node");

class Editor {
  /**
   * Constructs a new Editor object with the given text.
   * Defaults to empty text. Cursor is positioned at the end of the text.
   * @param {LinkedList} text - A linked List containing the characters that are in the editor,
   * empty by default
   */
  constructor(text = new LinkedList()) {
    this.text = text;
    this.cursor = this.text.find(
      (node, index) => index === this.text.length - 1
    );
  }

  /**
   * Insert a character at the cursor position of the editor.
   * @param {*} char a value to be inserted into the editor
   * @returns {Editor} a reference to this editor
   */
  insert(char) {
    let newNode = new Node(char);
    if (!this.text.head) {
      this.text.insertAtHead(char);
      this.cursor = this.text.head;
    } else if (!this.cursor) {
      newNode.next = this.text.head;
      this.text.head = newNode;
      this.cursor = newNode;
    } else if (this.cursor === this.text.head) {
      newNode.next = this.text.head.next;
      this.text.head.next = newNode;
      this.cursor = newNode;
    } else {
      let currentChar = this.cursor;
      currentChar.next = newNode;
      this.cursor = currentChar.next;
    }
    return this;
  }

  /**
   * Remove the character at the cursor position.
   * Moves the cursor to the previous position.
   * If editor is empty does nothing.
   * @returns {Editor} a reference to this editor
   */
  delete() {
    if (!this.text || !this.cursor) {
      return this;
    }

    if (this.cursor === this.text.head) {
      this.text.head = this.text.head.next;
      this.cursor = null;
    } else {
      let current = this.text.head;
      while (current.next !== this.cursor) {
        current = current.next;
      }

      current.next = this.cursor.next;
      this.cursor = current;
    }

    return this;
  }

  /**
   * Moves the cursor one position to the left.
   * If the cursor is at the start of the editor nothing happens.
   * @returns {Editor} a reference to this editor
   */
  arrowLeft() {
    if (!this.text.length) {
      return this;
    }

    if (this.cursor === this.text.head) {
      this.cursor = null;
    } else {
      let nodes = this.text.findWithPrevious((node, index) => index === this.text.length - 1);
      this.cursor = nodes[1];
    }

    return this; 
  }

  /**
   * Moves the cursor one position to the right.
   * If the cursor is at the end of the editor nothing happens.
   * @returns {Editor} a reference t this editor
   */
  arrowRight() {
    if (!this.text.length) {
      return this;
    }

    if (this.cursor === this.text.head) {
      this.cursor = this.text.head.next;
    } else if (!this.cursor) {
      this.cursor = this.text.head;
    }

    return this;
  }
}

module.exports = Editor;
