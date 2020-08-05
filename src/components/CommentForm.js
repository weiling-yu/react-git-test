import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, Form,FormGroup, Input, Label} from 'reactstrap';

export default CommentForm;



function generalCheck(mySize) {
    
    function check15 (value) {
        return value < mySize;
    }

    return check15;
}

var x10 = generalCheck(10);
var x20 = generalCheck(20);
var x30 = generalCheck(30);

x30(5)



