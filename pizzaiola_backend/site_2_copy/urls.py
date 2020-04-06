from opac.views import OpacInstitucionAutocomplete, OpacDescriptorAutocomplete, OpacAutorAutocomplete, OpacAutor2Autocomplete, OpacAutor3Autocomplete, OpacEditorialAutocomplete, OpacColeccionAutocomplete, OpacUsuarioAutocomplete,OpacMateriasAutocomplete, OpacCiudadAutocomplete, OpacRevsEjemplarAutocomplete, OpacCatedraAutocomplete, OpacTesisAutorAutocomplete
from registro_usuarios_biblioteca.views import OpacLibroAutocomplete, RegUsuariosAutocomplete
from django.conf.urls import include, url
from django.contrib import admin

from biblioteca.views import biblioteca
from biblioteca.views import biblioteca_bt
from opac.views import OpacSearchRoot
from opac.views import OpacResultsRoot
from nov_bibliograficas.views import NovBiblioRoot
from nov_bibliograficas.views  import BoletinesViewSet
from chat.views import ChatUserAuthRoot, ChatSessionView, ChatSessionMessageView
from rest_framework import routers
from django.conf import settings
 
ROUTER = routers.DefaultRouter()
ROUTER.register(r'boletines', BoletinesViewSet, base_name="lista-boletines")



urlpatterns = [
        url(r'^admin/', include(admin.site.urls)),
        #url(r'^$', OpacSearchRoot ,name='busq_recursos'),
        url(r'^$', biblioteca,name='biblioteca_nueva'),
        url(r'^biblioteca_bt', biblioteca_bt,name='biblioteca_bt'),
        url(r'^nov_bibliograficas', NovBiblioRoot ,name='nov_bibliograficas'),
        url(r'^busqueda_recursos', OpacSearchRoot ,name='busq_recursos'),
        url(r'^resultados_busqueda_recursos', OpacResultsRoot ,name='results_busq_recursos'),
        
           
        url(r'^ckeditor/', include('ckeditor_uploader.urls')),
        url(r'^nested_admin/', include('nested_admin.urls')),
        url(r'^grappelli/', include('grappelli.urls')),  # grappelli URLS

        #Para el DRF
        url(r'^api/',include(ROUTER.urls)),
        url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

        #Para el autocompletamiento de Campos en Admin Page   
        url(r'^opac-institucion-autocomplete/$',OpacInstitucionAutocomplete.as_view(create_field='nombre_institución'),name='opac-institucion-autocomplete', ),
        url(r'^opac-descriptor-autocomplete/$',OpacDescriptorAutocomplete.as_view(create_field='nombre_descriptor'),name='opac-descriptor-autocomplete', ),
        url(r'^opac-autor-autocomplete/$',OpacAutorAutocomplete.as_view(create_field='nombre_autor'),name='opac-autor-autocomplete', ),
        url(r'^opac-tesis-autor-autocomplete/$',OpacTesisAutorAutocomplete.as_view(create_field='nombre_autor'),name='opac-tesis-autor-autocomplete', ),
        #url(r'^opac-autor3-autocomplete/$',OpacAutor3Autocomplete.as_view(create_field='nombre_autor'),name='opac-autor3-autocomplete', ),
        url(r'^opac-tesis-autor-autocomplete/$',OpacAutorAutocomplete.as_view(create_field='nombre_autor'),name='opac-tesis-autor-autocomplete', ),
       # url(r'^opac-autor2-tesis-autocomplete/$',OpacAutorAutocomplete.as_view(create_field='nombre_autor'),name='opac-autor2-tesis-autocomplete', ),
        url(r'^opac-editorial-autocomplete/$',OpacEditorialAutocomplete.as_view(create_field='nombre_editorial'),name='opac-editorial-autocomplete', ),
        url(r'^opac-coleccion-autocomplete/$',OpacColeccionAutocomplete.as_view(create_field='nombre_colección'),name='opac-coleccion-autocomplete', ),
        url(r'^opac-libro-autocomplete/$',OpacLibroAutocomplete.as_view(create_field=''),name='opac-libro-autocomplete', ),
        url(r'^opac-materias-autocomplete/$',OpacMateriasAutocomplete.as_view(create_field='nombre_materia'),name='opac-materias-autocomplete', ),
        url(r'^reg-usuarios-autocomplete/$',RegUsuariosAutocomplete.as_view(create_field='nombre_apellidos'),name='reg-usuarios-autocomplete', ),
        url(r'^opac-ciudad-autocomplete/$',OpacCiudadAutocomplete.as_view(create_field='nombre_ciudad'),name='opac-ciudad-autocomplete', ),
        url(r'^opac-revs-ejemplar-autocomplete/$',OpacRevsEjemplarAutocomplete.as_view(create_field='nombre_revista'),name='opac-revs-ejemplar-autocomplete', ),
        url(r'^opac-catedra-autocomplete/$',OpacCatedraAutocomplete.as_view(create_field='nombre_catedra'),name='opac-catedra-autocomplete', ),


       #Para la App chat
        url(r'^chat/', ChatUserAuthRoot,name='chat_user_auth'), 
      
        url(r'^chats/', ChatSessionView.as_view()),
        url(r'^chats/<uri>/', ChatSessionView.as_view()),
        url(r'^chats/<uri>/messages/', ChatSessionMessageView.as_view()),
    
        url(r'^auth/', include('djoser.urls')),
        url(r'^auth/', include('djoser.urls.authtoken')),
        ]

"""
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
                        url(r'^__debug__/', include(debug_toolbar.urls)),
                    ] + urlpatterns
"""

