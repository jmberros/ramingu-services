class ServicesController < ApplicationController
  def index
    @contact_reasons = \
      %i(copywriting translation other).map do |reason|
        I18n.t "contact_form.#{reason}"
      end
  end

  def contact
    respond_to do |format|
      format.json do
        if mail_the_admins
          message = I18n.t('contact_form.thanks', name: params[:name])
          render status: :ok, json: message.to_json
        else
          error_message = I18n.t 'contact_form.error'
          render status: :bad_request, json: error_message.to_json
        end
      end
    end
  end

  private

  def mail_the_admins
    Mail.defaults do
      delivery_method :smtp, YAML.load_file('config/gmail.yml')
    end

    return unless params[:name].present? && params[:email].present?
    mail = Mail.new
    mail.from = 'Copylingual <copylingual@gmail.com>'
    mail.to = admins
    mail.subject = "Message from #{params[:name]}"
    mail.body = parsed_params
    mail.deliver!
  end

  def parsed_params
    [ "* Name: #{params[:name]}",
      "* Email: #{params[:email]}",
      "* Contact Reason: #{params[:contact_reason]}",
      "* Message: #{params[:message]}" ].join("\n")
  end

  def admins
    [ 'Juan Manuel Berros <juanmaberros@gmail.com>' ]
    #[ 'Juan Manuel Berros <juanmaberros@gmail.com>',
      #'Amy Ramirez <arami035@gmail.com>' ]
  end
end
