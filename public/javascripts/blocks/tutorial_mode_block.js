Blockly.Blocks["get_ready"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["WAIT_MY_TURN"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["move_player"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["DIRECTION_COMMAND_TOP"], "top"],
          [Blockly.Msg["DIRECTION_COMMAND_BOTTOM"], "bottom"],
          [Blockly.Msg["DIRECTION_COMMAND_LEFT"], "left"],
          [Blockly.Msg["DIRECTION_COMMAND_RIGHT"], "right"],
        ]),
        "move"
      )
      .appendField(Blockly.Msg["MOVE_INFO"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["look"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["DIRECTION_COMMAND_TOP"], "top"],
          [Blockly.Msg["DIRECTION_COMMAND_BOTTOM"], "bottom"],
          [Blockly.Msg["DIRECTION_COMMAND_LEFT"], "left"],
          [Blockly.Msg["DIRECTION_COMMAND_RIGHT"], "right"],
        ]),
        "look"
      )
      .appendField(Blockly.Msg["LOOK_INFO"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["search"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["DIRECTION_COMMAND_TOP"], "top"],
          [Blockly.Msg["DIRECTION_COMMAND_BOTTOM"], "bottom"],
          [Blockly.Msg["DIRECTION_COMMAND_LEFT"], "left"],
          [Blockly.Msg["DIRECTION_COMMAND_RIGHT"], "right"],
        ]),
        "search"
      )
      .appendField(Blockly.Msg["SEARCH_INFO"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["put_wall"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg["DIRECTION_COMMAND_TOP"], "top"],
          [Blockly.Msg["DIRECTION_COMMAND_BOTTOM"], "bottom"],
          [Blockly.Msg["DIRECTION_COMMAND_LEFT"], "left"],
          [Blockly.Msg["DIRECTION_COMMAND_RIGHT"], "right"],
        ]),
        "put_wall"
      )
      .appendField(Blockly.Msg["PUT_INFO"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["get_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "0"],
          ["2", "1"],
          ["3", "2"],
          ["4", "3"],
          ["5", "4"],
          ["6", "5"],
          ["7", "6"],
          ["8", "7"],
          ["9", "8"],
        ]),
        "get_value"
      )
      .appendField(Blockly.Msg["MAP_VALUE_INFO"]);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND)
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["if_value"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["1", "0"],
          ["2", "1"],
          ["3", "2"],
          ["4", "3"],
          ["5", "4"],
          ["6", "5"],
          ["7", "6"],
          ["8", "7"],
          ["9", "8"],
        ]),
        "map_value"
      )
      .appendField(Blockly.Msg["MAP_VALUE_INFO"] + "が")
      .appendField(
        new Blockly.FieldDropdown([
          ["なにもない", "0"],
          ["プレイヤーがいる", "1"],
          ["ブロックがある", "2"],
          ["ハートがある", "3"],
        ]),
        "map_item"
      )
      .appendField("なら");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL)
    this.setColour(195);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Blocks["infinite_loop"] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg["INFINITE_LOOP"]);
    this.appendStatementInput("infinite_loop_content").setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Constants.Loops.CONTROL_FLOW_IN_LOOP_CHECK_MIXIN.LOOP_TYPES.push(
  "infinite_loop"
);
