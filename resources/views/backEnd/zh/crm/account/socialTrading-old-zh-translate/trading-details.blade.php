@extends('backEnd.'.app()->getLocale().'.dashboard.layout') 
@section('title',$accounts->account_no.' ('.$accounts->act_type.')')

@section ('page-level-css')
<!--plugin styles-->
<link type="text/css" rel="stylesheet" href="/vendors/select2/css/select2.min.css" />
<link type="text/css" rel="stylesheet" href="/vendors/datatables/css/scroller.bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="/vendors/datatables/css/colReorder.bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="/vendors/datatables/css/dataTables.bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="/css/pages/dataTables.bootstrap.css" />

<link type="text/css" rel="stylesheet" href="/css/pages/tables.css" />
<link type="text/css" rel="stylesheet" href="#" id="skin_change" />
<link rel="stylesheet" href="/assets/backEnd/css/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="/assets/backEnd/css/custom-datatable.css">
<link type="text/css" rel="stylesheet" href="/css/pages/index.css">
<link type="text/css" rel="stylesheet" href="#" id="skin_change" />
<link rel="stylesheet" href="/assets/backEnd/css/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="/assets/backEnd/css/custom-datatable.css">
@endsection
 
@section('content')

<div id="content" class="bg-container">
    <header class="head">
        <div class="main-bar">
            <div class="row no-gutters">
                <div class="col-6">
                    <h4 class="m-t-5">
                        <i class="fa fa-user"></i> {{$accounts->account_no}} ({{$accounts->act_type}})
                    </h4>
                </div>
            </div>
        </div>
    </header>
    <div class="outer">
        <div class="inner bg-container">
            <div class="row">
                <div class="col-md-6 m-b-20">
                    <div class="card">
                        <div class="row">

                            <div class="col-md-4">
                                <p class="p-img"><img src="/img/standard-ac-type.png"></p>
                            </div>
                            <div class="col-md-8">
                                <table class="table" id="myTable">
                                    <tbody>

                                        <tr>
                                            <td class="left">Account Type</td>
                                            <td class="left" id="type_account">{{$accounts->act_type}}</td>
                                        </tr>
                                        <tr>
                                            <td class="left">Balance</td>
                                            <td class="left" id="type_account">{{$accounts->BALANCE}}</td>
                                        </tr>

                                        <tr>
                                            <td class="left">Credit</td>
                                            <td class="left" id="leverage_show">{{$accounts->CREDIT}}</td>
                                        </tr>
                                        <tr>
                                            <td class="left">Equity</td>
                                            <td class="left" id="leverage_show">{{$accounts->EQUITY}}</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-12">
                                <div class="fund-button clearfix">
                                    <div class="col-md-4">
                                        <a href="/deposit-funds?ac={{$accounts->account_no}}" class="title-button"><button>Deposit Funds</button></a>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="/internal-transfer?ac={{$accounts->account_no}}"><button>Internal Transfer</button></a>
                                    </div>
                                    <div class="col-md-4">
                                        <a href="/change-mt4-password?ac={{$accounts->account_no}}"><button>Change Password</button></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card height">
                        <table class="table" id="myTable">
                            <tbody>
                                <tr>
                                    <td class="left">Currency</td>
                                    <td class="left">{{$accounts->CURRENCY}}</td>
                                </tr>

                                <tr>
                                    <td class="left">Leverage</td>
                                    <td class="left" id="leverage_show">1 : {{$accounts->LEVERAGE}}</td>
                                </tr>
                                <tr>
                                    <td class="left">Commission</td>
                                    <td class="left" id=""></td>
                                </tr>
                                <tr>
                                    <td class="left">Minimum Deposit</td>
                                    <td class="left" id=""></td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <!-- Investor Details -->
            <!--top section widgets-->
            <div class="card">
                <div class="card-block">
                    <!-- ManagerTable -->
                    <h2 style="text-align: center">List of investor accounts</h2>
                    <table class="table table-striped table-responsive">
                        <thead>
                            <tr>
                                <th>Active</th>
                                <th>LOGIN </th>
                                <th>Name</th>
                                <th>Group</th>
                                <th>Volume (lot)</th>
                                <th>%</th>
                                <th>Balance</th>
                                <th>Equity</th>
                                <th>Margin</th>
                                <th>Running Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(count($investorDetails)>0) @foreach ($investorDetails as $key => $account)
                            <tr>
                                <td>
                                    <input type="checkbox" name="logins[]" id="{{ $account->int_id }}" value="{{ $account->account_no }}" data-margin="{{ $account->MARGIN_FREE }}"
                                        data-balance="{{ $account->BALANCE }}" data-equity="{{ $account->EQUITY }}">
                                </td>
                                <td>{{$account->account_no}}</td>
                                <td>{{ $account->fname }}</td>
                                <td>{{ $account->GROUP }}</td>
                                <td>VOLUME</td>
                                <td>percentage</td>
                                <td>{{round($account->BALANCE,2)}}</td>
                                <td>{{round($account->EQUITY,2)}}</td>
                                <td>{{round($account->MARGIN_FREE,2)}}</td>
                                <td>{{ $account->running_trades }}</td>
                            </tr>
                            @endforeach
                            <tr>
                                <td colspan="10"></td>
                            </tr>
                            <tr>
                                <td>active number <span id="actives">0</span></td>
                                <td>total login : {{ count($investorDetails) }}</td>
                                <td></td>
                                <td></td>
                                <td>Total Volume</td>
                                <td>Total %</td>
                                <td>Total Balance: {{ array_sum(array_column($investorDetails, 'BALANCE')) }}</td>
                                <td>Total Equity: {{ array_sum(array_column($investorDetails, 'EQUITY')) }}</td>
                                <td>Total Margin: {{ array_sum(array_column($investorDetails, 'MARGIN_FREE')) }}</td>
                                <td>Total Running Order: {{ array_sum(array_column($investorDetails, 'running_trades')) }}</td>
                            </tr>
                            @else
                            <tr>
                                <td colspan="10">No investors under this Manager account</td>
                            </tr>
                            @endif
                        </tbody>
                    </table>
                </div>

            </div>
            <!-- End of Investor Details -->

            <!--Summery-->
            <div class="card">
                <div class="card-block">
                    <h2 style="text-align: center">Summery</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Total Account: {{ count($investorDetails) }}</p>
                            <p>Total Balance: {{ array_sum(array_column($investorDetails, 'BALANCE')) }}</p>
                            <p>Total Equity: {{ array_sum(array_column($investorDetails, 'EQUITY')) }}</p>
                            <p>Total Margin: {{ array_sum(array_column($investorDetails, 'MARGIN_FREE')) }}</p>
                            <p>Total Running Order: {{ array_sum(array_column($investorDetails, 'running_trades')) }}</p>
                        </div>
                        <div class="col-md-6">
                            <p>Active Account: <span id="activeAccount">0</span></p>
                            <p>Active Balance: <span id="activeBalance">0</span></p>
                            <p>Active Equity: <span id="activeEquity">0</span></p>
                            <p>Active Margin: <span id="activeMargin">0</span></p>
                            <p>Active Running Order: <span id="activeRunningOrder">0</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End of Summery -->

            <!--top section widgets-->
            <div class="card" style="overflow: auto;">

                <div class="card-block">
                    <div class="">
                        <div class="nav-tabs-custom">
                            <ul class="nav nav-tabs" style="margin-top: 12px">
                                <li class="nav-item">
                                    <a href="#tab_2" class="nav-link active" data-toggle="tab">Live Trade</a>
                                </li>
                                <!-- <li class="nav-item">
                                                    <a href="#tab_3" class="nav-link" data-toggle="tab">History</a>
                                                </li> -->
                                <li class="nav-item">
                                    <a href="#tab_4" class="nav-link" data-toggle="tab">History</a>
                                </li>


                            </ul>
                            <div class="tab-content">


                                <div class="tab-pane active gallery-padding" id="tab_2">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="table table-bordered  table-striped no-wrap">
                                        <thead style="font-weight: bold;">
                                            <tr>
                                                <td align="left">Ticket</td>
                                                <td>Time</td>
                                                <td>Type</td>
                                                <td>Lots</td>
                                                <td>Symbol</td>
                                                <td>Open Price</td>
                                                <td>S/L</td>
                                                <td>T/P</td>
                                                <td>Running Price</td>
                                                <td>Comm</td>
                                                <td>Swap</td>
                                                <td>Profit</td>
                                            </tr>
                                            <thead>
                                                <tbody id="ajax-live-trade">

                                                    @php if(count($trades)>0){ foreach($trades as $trade){ if($trade->CMD=='0'){ $cmd='Buy'; } elseif ($trade->CMD=='1'){ $cmd='Sell';
                                                    } else{ $cmd=''; } $open_time=$trade->OPEN_TIME; $open_time=strtotime($open_time);
                                                    $open_time=date('m/d/y',$open_time); $lots=$trade->VOLUME/100; echo '
                                                    <tr>
                                                        <td>'.$trade->TICKET.'</td>
                                                        <td>'.$open_time.'</td>
                                                        <td>'.$cmd.'</td>
                                                        <td>'.$lots.'</td>
                                                        <td>'.$trade->SYMBOL.'</td>
                                                        <td>'.$trade->OPEN_PRICE.'</td>
                                                        <td>'.$trade->SL.'</td>
                                                        <td>'.$trade->TP.'</td>
                                                        <td>'.$trade->CLOSE_PRICE.'</td>
                                                        <td>'.$trade->COMMISSION.'</td>
                                                        <td>'.$trade->SWAPS.'</td>
                                                        <td>'.$trade->PROFIT.'</td>
                                                    </tr>'; } echo '
                                                    <tr>
                                                        <td colspan="11" style="text-align: left;"><strong>Balance: '.$accounts->BALANCE.', Credit: '.$accounts->CREDIT.', Equity: '.$accounts->EQUITY.', Free margin: '.$accounts->MARGIN_FREE.'</strong></td>
                                                        <td colspan="1"></td>
                                                    </tr>'; } else{ echo '
                                                    <tr>
                                                        <td colspan="14" style="text-align:center;"><strong>No Running Trade</strong></td>
                                                    </tr>'; } 
@endphp

                                                </tbody>
                                    </table>
                                </div>





                                <div class="tab-pane gallery-padding" id="tab_4">
                                    <div id="commission_table1_wrapper" class="dataTables_wrapper dt-bootstrap no-footer">

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <table class="display table table-bordered  dataTable no-footer" id="tradingHistory" role="grid" aria-describedby="commission_table1_info"
                                                    style="width: 100%;" width="100%">
                                                    <div class="col-md-3 custom-date">
                                                        <input type="text" value="{{ \Carbon\Carbon::now()->addMonths(-1)->format('d/m/Y') }}" id="from" class="form-control effect_in_margin_top datepicker">
                                                    </div>
                                                    <div class="col-md-3 custom-date">
                                                        <input type="text" value="{{ \Carbon\Carbon::now()->format('d/m/Y') }}" id="to" class="form-control effect_in_margin_top datepicker">
                                                    </div>
                                                    <div class="col-md-3 custom-date">
                                                        <button type="button" id="dateSearch" class="btn btn-success m-t-33 check-button">Check</button>
                                                    </div>

                                                    <thead>
                                                        <tr role="row">
                                                            <th>TICKET</th>
                                                            <th>TIME</th>
                                                            <th>TYPE &nbsp;&nbsp;|&nbsp;&nbsp; SYMBOL</th>
                                                            <th>LOTS</th>

                                                            <th>O/P &nbsp;&nbsp;|&nbsp;&nbsp; S/L &nbsp;&nbsp;|&nbsp;&nbsp; T/P
                                                                &nbsp;&nbsp;|&nbsp;&nbsp; C/P</th>

                                                            <th>COMM &nbsp;&nbsp;|&nbsp;&nbsp; SWAPS</th>

                                                            <th>COMMENT</th>
                                                            <th>PROFIT</th>


                                                        </tr>
                                                    </thead>



                                                </table>

                                                <p id="total_amount"></p>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <!-- /.tab-content -->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- /.inner -->
    </div>
</div>
</div>
</div>
{{csrf_field()}}
@endsection
 
@section('page-level-js')
<!--plugin scripts-->
<!--plugin scripts-->

<script type="text/javascript" src="/vendors/select2/js/select2.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="/js/pluginjs/dataTables.tableTools.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.colReorder.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.bootstrap.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.responsive.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.rowReorder.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/buttons.colVis.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/buttons.html5.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/buttons.bootstrap.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/buttons.print.min.js"></script>
<script type="text/javascript" src="/vendors/datatables/js/dataTables.scroller.min.js"></script>

<script src="/js/jquery-ui.js"></script>
<script type="text/javascript" src="/js/pages/moment.js"></script>
<!-- end of plugin scripts -->
<!--Page level scripts-->

<script>
    $(document).ready(function(){
                $('input[type="checkbox"]').click(function(){
                        var activeAccountNo = $(this).val()
                        var activeMargin = $(this).data('margin')
                        var activeBalance = $(this).data('balance')
                        var activeEquity = $(this).data('equity')
                    if($(this).prop("checked") == true){
                        // updating active summery
                        document.getElementById('actives').innerHTML = +document.getElementById('activeAccount').innerHTML + +1
                        document.getElementById('activeAccount').innerHTML = +document.getElementById('activeAccount').innerHTML + +1
                        document.getElementById('activeBalance').innerHTML = +document.getElementById('activeBalance').innerHTML + +activeBalance
                        document.getElementById('activeMargin').innerHTML = +document.getElementById('activeMargin').innerHTML + +activeMargin
                        document.getElementById('activeEquity').innerHTML = +document.getElementById('activeEquity').innerHTML + +activeEquity
                    }
                    else if($(this).prop("checked") == false){
                        // updating active summery
                        document.getElementById('actives').innerHTML = +document.getElementById('activeAccount').innerHTML - 1
                        document.getElementById('activeAccount').innerHTML = +document.getElementById('activeAccount').innerHTML - 1
                        document.getElementById('activeBalance').innerHTML = +document.getElementById('activeBalance').innerHTML - activeBalance
                        document.getElementById('activeMargin').innerHTML = +document.getElementById('activeMargin').innerHTML - activeMargin
                        document.getElementById('activeEquity').innerHTML = +document.getElementById('activeEquity').innerHTML - activeEquity
                    }
                });
            });

</script>

<script>
    $( function() {
    $( ".datepicker" ).datepicker({ 
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      yearRange: '2016:'+ new Date().getFullYear()
       });
  } );

</script>
<script>
    var oTable = $('#tradingHistory').DataTable({
                dom: 'frtBp',
                buttons: [
                    {
                        text: 'Print Selected Orders',
                        action: function ( e, dt, node, config )
                              {
                                  alert( 'You clicked me!' );
                              }
                    }
                ],
                stateSave: true,
                paging:     true,
                pagingType: 'simple_numbers',
                lengthMenu: [ [ 15, 50, 100, -1 ], [ 15, 50, 100, "All" ] ],
                processing: true,
                serverSide: true,
                ajax: {
                    url: "{{LaravelLocalization::localizeURL('/trading-history-single-datatable')}}",
                        data: function(d) {
                            d.from = $('input#from').val();
                            d.to = $('input#to').val();
                            d.account_no='{{$accounts->account_no}}';
                           
                        }
                    },
                columns: [
                    { data: 'TICKET', name: 'TICKET' },
                    { data: 'CLOSE_TIME', name: 'CLOSE_TIME' },
                   { data: 'Type_c', name: 'Type_c' },
                   
                    { data: 'lots', name: 'lots'},
                    { data: 'op', name: 'op'},
                    { data: 'com', name: 'com'},
                    
                    { data: 'COMMENT', name: 'COMMENT'},
                    { data: 'PROFIT', name: 'PROFIT'},
                    
                   
                    
                ],
                
                order: [ [0, 'desc'] ],

        "dom": "<'row'<'col-md-5 col-12'l><'col-md-7 col-12'f>r><''t><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>",
       
            });

</script>

<script>
    var from=$('input#from').val();
  var to=$('input#to').val();
  $.ajax({
        url: "{{LaravelLocalization::localizeURL('/trading-history-single-total')}}",
      
       
                        data:{
                            from:from,
                            to:to,
                           account_no:{{$accounts->account_no}}
                        },
        success: function(data){ 
                       
                          $('p#total_amount').html( data );
                           
                      
                 }
    });

</script>
<script>
    $(document).on('click','#dateSearch', function() {
      var from=$('input#from').val();
  var to=$('input#to').val();
                oTable.draw();
                
                
                
                 $.ajax({
        url: "{{LaravelLocalization::localizeURL('/trading-history-single-total')}}",
      
       
                        data:{
                            from:from,
                            to:to,
                           account_no:{{$accounts->account_no}}
                        },
        success: function(data){ 
                       
                          $('p#total_amount').html( data );
                           
                      
                 }
    });

            });

</script>
@endsection