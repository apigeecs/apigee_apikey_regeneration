(function ($) {
    Drupal.behaviors.apigee_apikey_regeneration = {
        attach: function (context, settings) {
            // Load the app delete form in a modal.
            $('.apigee-modal-link-regenerate-key a').click(function() {
                var hrefLocation = $(this).attr('href');
                var identifier = $(this).attr('data-target');
                var loadingText = Drupal.t('Loading...');

                // Open the empty modal.
                $(identifier).modal();
                if (($(identifier + ' .modal-body #apigee-apikey-regeneration-confirm-form').length == 0)) {
                    $(identifier + ' .modal-body').html('<p class="load-indicator" style="display:none;">' +
                        '<span class="label label-success" style="padding:5px;">' + loadingText + '</span></p>');
                    _key_apigeePulsateForever(identifier + ' .modal-body .load-indicator');
                }

                // Load the page fragment (#devconnect_developer_application_delete) via an AJAX call.
                $(identifier + ' .modal-body').load(hrefLocation + ' #apigee-apikey-regeneration-confirm-form', function() {
                    if (!($(identifier + ' .modal-body #apigee-apikey-regeneration-confirm-form').length == 0)) {
                        $(this).remove('.load-indicator');
                    }
                });
                return false;
            });
        }
    }
    function _key_apigeePulsateForever(elem) {
        $(elem).fadeTo(500, 1.0);
        $(elem).fadeTo(500, 0.1, function() {
            apigeePulsateForever(elem);
        });
    }
})(jQuery);