# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Right here we're declaring our class BlogPostsController to extend ApplicationController. this will hold our methods :)
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Here we're inside of the index method and we're setting our instance variable to equal all posts within BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3)
    # Here we're setting our instance variable to a specific post in BlogPost called with the params id
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Right here we're declaring 'defining' a new method 'new'
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # We're setting our instance variable to equal creating a new blog post to add to the database. If the post doesn't already exist, it will post! Otherwise it will redirect you to the creation page again
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # We're defining a new method 'edit' that will allow updates to existing posts. Our instance variable is equal to a specific post defined by the params id givem
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Here we're running an if/else for checking if the update is valid! if it is, yay! redirect to updated the updated post otherwise back to the edit page
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # Oooo so if you idk back out of deleting a post or it's just unsuccessful somehow this else statement redirects you back to the post you attemoted to destroy
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This private keyword means anything below this line cannot be accessed outside of this class. So when we call this method in our update method, only wha we allow here can get passed
  private
  def blog_post_params
    # ---10)
    # Uh well Right here we're saying a new entry MUST have a title and content and NOTHING else is allowed 
    params.require(:blog_post).permit(:title, :content)
  end
end
