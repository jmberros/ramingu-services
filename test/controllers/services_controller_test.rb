require 'test_helper'

class ServicesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get translations" do
    get :translations
    assert_response :success
  end

  test "should get creative" do
    get :creative
    assert_response :success
  end

end
