from django.db import models

class Supplier(models.Model):
    name = models.CharField(max_length=200,default="Type the name and surname of the supplier")
    is_company = models.BooleanField(default=False)
    phone = models.CharField(max_length=13,default='+39-1234-5678')
    address = models.TextField(default="Type the address of the supplier")
    email = models.EmailField( default='supplier@company.com',max_length=254)

    def __str__(self):
        return self.name
    

    class Meta:
        managed = True
        db_table = 'suppliers'
        verbose_name = 'Supplier'
        verbose_name_plural = 'Suppliers'



class MeasureUnit(models.Model):
    name = models.CharField(max_length=50,default="Please type a new Measure")
    description = models.TextField(blank=True,null=True)
    abreviature = models.CharField(max_length=4,default="Unit")



    class Meta:
        managed = True
        db_table = 'measure_units'
        verbose_name = 'MeasureUnit'
        verbose_name_plural = 'MeasureUnits'

    def __str__(self):
        return self.abreviature


class StockCategory(models.Model):
    name = models.CharField(max_length=50,default="Please type a new catogory")
    description = models.TextField(blank=True,null=True)

    class Meta:
        managed = True
        db_table = 'stock_category'
        verbose_name = 'StockCategory'
        verbose_name_plural = 'StockCategories'

    def __str__(self):
        return self.name
     
        


class Stock(models.Model):
    name = models.CharField(max_length=50,default="Please type the name of the produce")
    category = models.ForeignKey(StockCategory,on_delete=models.DO_NOTHING)
    measure_unit = models.ForeignKey(MeasureUnit,default=0,on_delete=models.DO_NOTHING)
    quantity = models.PositiveSmallIntegerField(default=0)
    supplier = models.ForeignKey(Supplier, verbose_name="Supplier",default=1, on_delete=models.CASCADE)

    class Meta:
        managed = True
        db_table = 'stock'
        verbose_name = 'Stock'
        verbose_name_plural = 'Stocks' 

    def __str__(self):
        return self.name
    


class FridgeEnvirontment(models.Model):

    FAHRENHEIT = 'F°'
    CENTIGRADE = 'C°'
    
    TEMPERATURE_UNITS = [
       (FAHRENHEIT,'Fahrenheit'),
       (CENTIGRADE,'Celsius'),   
    ]

    temperature = models.DecimalField(max_digits=3,decimal_places=1,default=25.0)
    temperature_unit = models.CharField(max_length=20,choices=TEMPERATURE_UNITS)

