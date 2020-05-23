class UsersController < ApplicationController
  def index
    @user = current_user
    # comments = user.comments.all
    @comment = Comment.new
    @comments = current_user.comments
  end
end
