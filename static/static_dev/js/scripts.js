$(document).ready(function () {
   var form = $('#form_buying_product');
   console.log(form);
   form.on('submit',function (e) {
       e.preventDefault();
       console.log('123');
       var nmb = $('#number').val();
       console.log(nmb);
       var submit_btn=$('#submit_btn');
       var product_id=submit_btn.data('product_id')
       var product_name=submit_btn.data('name')
       var product_price=submit_btn.data('price')
       console.log(product_id)
       console.log(product_name)

       var data={};
       data.product_id=product_id;
       data.nmb=nmb;
       var csrf_token=$('#form_buying_product [name="csrfmiddlewaretoken"]').val();
       data["csrfmiddlewaretoken"]=csrf_token;

       console.log(data);
       console.log(csrf_token);

       var url=form.attr("action");
       $.ajax({
           url:url,
           type:'POST',
           data:data,
           cache:true,
           success:function (data) {
               console.log("OK");
               console.log(data.products_total_nmb);

               if(data.products_total_nmb){
                   $('.basket-items ul').html("")
                   $('#basket_total_nmb').text("(" + data.products_total_nmb + ")");
                   console.log(data.products);
                   $.each(data.products,function (k,v) {
                       $('.basket-items ul').append('<li>'+v.name+', ' + v.nmb + 'шт.' + 'по ' + v.price_per_item + 'грн  ' +
                        '<a class="delete-item" href="">x</a>' + '</li>');

                   })
               }
           },
           error:function () {
               console.log("error")
           }
       });


         });
    function showingBasket() {
        $('.basket-items').removeClass('hidden');
    };
    $('.basket-container').on('click',function (e) {
        e.preventDefault();
        showingBasket();
    });
    $('.basket-container').mouseover(function () {
        showingBasket();
    });
    // $('.basket-container').mouseout(function () {
    // showingBasket();
    // });
    $(document).on('click','.delete-item',function () {
        $(this).closest('li').remove();
    })
});