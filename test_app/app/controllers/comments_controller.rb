class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    if comment.save
      flash[:success] = "comment was successfully created."
    end
    redirect_to users_path
    #  else
    #   @books = Book.all
    #   @user = current_user
    #   render action: :index
  end

  private

  def comment_params
    params.require(:comment).permit(:context)
  end
end
