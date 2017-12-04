from django.conf.urls import url,include
from django.contrib import admin

from . import views
urlpatterns=[
    # url(r'^landing/',views.landing,name='landing')
    url(r'^product/(?P<product_id>\w+)/$',views.product, name='product')
]