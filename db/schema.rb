# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_30_002829) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.string "level"
    t.string "movetype"
    t.integer "reps"
    t.integer "sets"
    t.string "image"
    t.text "desc"
    t.string "category"
    t.bigint "workout_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "eduration"
    t.index ["workout_id"], name: "index_exercises_on_workout_id"
  end

  create_table "trainings", force: :cascade do |t|
    t.string "tname"
    t.integer "duration"
    t.bigint "userworkout_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
    t.index ["userworkout_id"], name: "index_trainings_on_userworkout_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "first"
    t.string "last"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  create_table "userworkouts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "workout_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_userworkouts_on_user_id"
    t.index ["workout_id"], name: "index_userworkouts_on_workout_id"
  end

  create_table "workouts", force: :cascade do |t|
    t.string "wname"
    t.string "wimage"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "difficulty"
  end

  add_foreign_key "exercises", "workouts"
  add_foreign_key "trainings", "userworkouts"
  add_foreign_key "userworkouts", "users"
  add_foreign_key "userworkouts", "workouts"
end
