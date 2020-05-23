require 'rails_helper'

RSpec.describe "Users", type: :request do
  let!(:user) { create :user }

  describe 'GET #index' do
    context 'ユーザが存在する場合' do
      before do
        users_path user
        sign_in user
      end
      it '正常なレスポンスを返すこと' do
        get users_path user
        expect(response.status).to eq 200
      end
      it 'ユーザー名が表示されていること' do
        get users_path user
        expect(response.body).to include 'test@gmail.com'
      end
    end
  end
end
