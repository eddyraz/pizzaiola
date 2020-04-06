import os
import sys


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = '6a@sc(rz%q8u)pic2&m6_aw^zqu_qj6(th24q7ye*72ds2*k!&'
PROJECT_ROOT = os.path.dirname(__file__)
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))

DEBUG = True

ALLOWED_HOSTS = ['biblioteca.ccpadrevarela.org']

INSTALLED_APPS = [
    'suit',
    'nested_admin',
    'rangefilter',
   # TimeLine para el admin page
    'admin_timeline',

   #Para las graficas en el modulo reporte 
    'jchart',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'dal',
    'dal_select2',


      #Apps del Proyecto
    'biblioteca',
    'opac',

    'nov_bibliograficas',
#    'encuestas',
    'contabilidad',
    'reportes',
#     'foro',
    #'gramm_checker',
    'registro_usuarios_biblioteca',
    'utilidades',

    #Apps de Terceros
    'serpy',
    'rest_framework',
    'rest_framework_jwt',
    'django_elasticsearch_dsl',
    #CKEditor
    'ckeditor',
    'ckeditor_uploader',
    #Foro
    #PolymorphicTrees
    #'polymorphic_tree',
    'polymorphic',
#    'mptt',
    #Chat
    'djoser',
#    'notifications',
    'rest_framework.authtoken',
#    'channels',
    'daphne',
#    'asgi_redis',
    'chat',
    #Reportes Estadisticos
    'reportlab',
    #Para los multiselect en el Admin
    'multiselectfield',
    #Para autocompletamiento
    #Para Generacion de Pdfs
    'django_pdfkit',
    #Para Personalizacion del Admin
     'admin_steroids',

    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'dedalos.urls'
LOGOUT_REDIRECT_URL = '/admin/login'
SUIT_CONFIG = {
'ADMIN_NAME': 'BIBLIOTECA Centro Cultural P.Felix Varela'
}


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['/home/edr/dedalos/templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'dedalos.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'dedalos_ccpfv',
        'HOST' : '10.0.2.15' ,
        'USER' : 'edr' ,
        'PASSWORD' : 'H@bana2019*' ,
        'PORT' : '5432' ,
        
    } 
}

#Me dio un error y de todas formas redis no lo uso.
# Cache
#CACHES = {
#        'default': {
#                    'BACKEND': 'redis_cache.RedisCache',
#                    'LOCATION': 'localhost:6379',
#                    'OPTIONS': {
#                                    'DB': 1
#                                    # 'PASSWORD' :'asdas6d87sf6tsd8f',
#                                    }
#                    }
#    }

# Password validation
# https://docs.djangoproject.com/en/1.11/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.11/topics/i18n/

LANGUAGE_CODE = 'es-cu'
TIME_ZONE = 'America/Havana'
USE_I18N = True
USE_L10N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.11/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
       os.path.join(BASE_DIR, 'static'),
]

LOGIN_URL = '/'
MEDIA_URL = 'uploads/'
MEDIA_ROOT = '/usr/local/etc/nginx/dedalos/media'
STATIC_ROOT = '/usr/local/etc/nginx/dedalos/static'
SITE_URL = 'dedalos'
UPLOAD_URL = 'uploads/'
SITE_ID = '2'



CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': None,
        'height': 600,
        'width': 1000,
    },

}

CKEDITOR_IMAGE_BACKEND = "pillow"
CKEDITOR_UPLOAD_SLUGIFY_FILENAME = False
#CKEDITOR_UPLOAD_PATH =  os.path.join(BASE_DIR,'/uploads/')
CKEDITOR_UPLOAD_PATH =  '/usr/local/etc/nginx/dedalos/media/uploads/ckeditor'
CKEDITOR_UPLOAD_PATH =  'uploads/'

#####################################
#CONFIG DE SERVIDORES DE BUSQUEDA   ################################################################
#####################################
ELASTICSEARCH_DSL={
'default': {
    'hosts': '10.0.2.15:9200',
    'sniff_on_start' : True   
  },
}

#Sincronizacion en Tiempo Real entre PostgreSQL y ElasticSearch
ELASTICSEARCH_DSL_SIGNAL_PROCESSOR = 'django_elasticsearch_dsl.signals.RealTimeSignalProcessor'

######################################################################################################



#LOGGING = {
#    'version': 1,
#    'disable_existing_loggers': False,
#    'handlers': {
#        'console': {
#            'class': 'logging.StreamHandler',
#        },
#    },
#    'loggers': {
#        'django': {
#            'handlers': ['console'],
#            'level': os.getenv('DJANGO_LOG_LEVEL', 'DEBUG'),
#        },
#    },
#}
