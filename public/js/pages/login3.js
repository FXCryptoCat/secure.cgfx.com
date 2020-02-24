'use strict';
$(document).ready(function() {
    $(".login_backimg").backstretch([
        "img/login2.png"
 
    ]);
    $(window).on("load",function() {
        $('.preloader img').fadeOut();
        $('.preloader').fadeOut(1000);
    });
    $('#login_validator').bootstrapValidator({
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address. '
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            }
        }
    });
    $('#register_valid').bootstrapValidator({
        fields: {
            UserName: {
                validators: {
                    notEmpty: {
                        message: 'The user name is required and cannot be empty'
                    }
                }
            },
            fname: {
                validators: {
                    notEmpty: {
                        message: 'First name is required and cannot be empty'
                    }
                }
            },
            lname: {
                validators: {
                    notEmpty: {
                        message: 'Last name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address. '
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'Please provide a password'
                    }
                }
            },
            confirmpassword: {
                validators: {
                    notEmpty: {
                        message: 'The confirm password is required and can\'t be empty'
                    },
                    identical: {
                        field: 'password',
                        message: 'Please enter the same password as above'
                    }
                }
            },
            dob: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Date of Birth'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'Please select your country'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your phone number'
                    },
                    stringLength: {
                        min: 8,
                        
                        message: 'The phone number is too short\n'
                    }
                }
            }
        }
    });
    $('#login_validator1').bootstrapValidator({
        fields: {
            email_modal: {
                validators: {
                    notEmpty: {
                        message: 'enter your valid email'
                    },
                    regexp: {
                        regexp: /^\S+@\S{1,}\.\S{1,}$/,
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });
    validate();
    function validate() {
        if ($('.email_forgot').val() > 0) {
            $(".submit_email").prop("disabled", false);
        } else {
            $(".submit_email").prop("disabled", true);
        }
    }
});