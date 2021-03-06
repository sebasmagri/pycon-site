from django.conf.urls import url, patterns

urlpatterns = patterns('cms.views',
    url(r'^presentation/add/$', 'presentation_create', name='presentation-create'),
    url(r'^presentation/list/$', 'presentation_list', name='presentation-list'),
    url(r'^presentation/(?P<presentation_id>\d+)/view/$', 'presentation_view', name='presentation-view'),
    url(r'^presentation/edit/(?P<presentation_id>\d+)/$', 'presentation_edit', name='presentation-edit'),
    url(r'^presentation/delete/(?P<presentation_id>\d+)/$', 'presentation_delete', name='presentation-delete'),
    url(r'^presentation/vote/(?P<presentation_id>\d+)/$', 'presentation_vote', name='presentation-vote'),
    url(r'success/$', 'presentation_success', name='success-presentation'),
)
