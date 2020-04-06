from django.contrib import admin
from fridge.models import Stock
from fridge.models import StockCategory 
from fridge.models import MeasureUnit
from fridge.models import FridgeEnvirontment
from fridge.models import Supplier

# Register your models here.

@admin.register(Stock)
class StockAdmin(admin.ModelAdmin):
    list_display = ('name','category','quantity','measure_unit','supplier')
    search_fields = ['name',]
    list_per_page = 15 

@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ('name','is_company','phone','address','email')





admin.site.register(StockCategory)
admin.site.register(MeasureUnit)
admin.site.register(FridgeEnvirontment)